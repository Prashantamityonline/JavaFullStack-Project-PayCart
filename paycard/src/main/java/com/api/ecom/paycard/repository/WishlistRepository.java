package com.api.ecom.paycard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.ecom.paycard.entities.WishList;

@Repository
public interface WishlistRepository extends JpaRepository<WishList, Integer> {

}