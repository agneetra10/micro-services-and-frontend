package com.deloitte.product.productService.restClients;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.deloitte.product.productService.dto.Coupon;

@FeignClient("GATEWAY-SERVICE")
public interface CouponClient {

	@GetMapping("/couponapi/coupons/{code}")
	Coupon getCoupon(@PathVariable String code);
}
