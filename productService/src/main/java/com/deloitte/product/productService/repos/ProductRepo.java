package com.deloitte.product.productService.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.deloitte.product.productService.models.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {

}
