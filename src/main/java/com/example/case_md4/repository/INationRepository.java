package com.example.case_md4.repository;

import com.example.case_md4.model.Nation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface INationRepository extends JpaRepository<Nation,Long> {
}
