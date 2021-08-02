package com.deloitte.product.productService.controllers;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deloitte.product.productService.dto.Coupon;
import com.deloitte.product.productService.models.Product;
import com.deloitte.product.productService.repos.ProductRepo;
import com.deloitte.product.productService.restClients.CouponClient;

import io.github.resilience4j.retry.annotation.Retry;

@RestController
@RequestMapping("/productapi")
public class ProductController {

	@Autowired
	private ProductRepo productRepo;
	
	@Autowired
	private CouponClient couponClient;
	
	@PostMapping("/products")
	@Retry(name="product-api", fallbackMethod = "handleError")
	public Product createProduct(@RequestBody Product product) {
		Coupon coupon = couponClient.getCoupon(product.getCouponCode());
		product.setPrice(product.getPrice().subtract(product.getPrice().multiply(coupon.getDiscount()).divide(new BigDecimal(100))));
		return productRepo.save(product);
	}
	
	@GetMapping("/products")
	public List<Product> getAllProducts() {
		return productRepo.findAll();
	}
	
	public Product handleError(Product product, Exception exception) {
		System.out.println("Inside handle error");
		return product;
	}
	
}
