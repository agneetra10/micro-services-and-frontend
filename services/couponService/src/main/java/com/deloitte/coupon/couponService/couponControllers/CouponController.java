package com.deloitte.coupon.couponService.couponControllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.deloitte.coupon.couponService.model.Coupon;
import com.deloitte.coupon.couponService.repos.CouponRepo;

@RestController
@RequestMapping("/couponapi")
public class CouponController {
	
	@Autowired
	private CouponRepo couponRepo;
	
	Logger logger = LoggerFactory.getLogger(CouponController.class);
	
	@PostMapping("/coupons")
	public Coupon createCoupon(@RequestBody Coupon coupon) {
		return couponRepo.save(coupon);
	}
	
	@GetMapping("/coupons/{code}")	
	public Coupon getCoupon(@PathVariable String code) {
		logger.info("fetching details for coupon code: " + code);
		return couponRepo.findByCode(code);
	}
	
	@GetMapping("/coupons") 
	public List<Coupon> getAllCoupons() {
		return couponRepo.findAll();
	}

}
