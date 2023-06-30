package com.example.case_md4.service.city;

import com.example.case_md4.model.City;
import com.example.case_md4.service.IGeneralService;

import java.util.Optional;

public interface ICityService extends IGeneralService<City> {
    Iterable<City> findAll();

    Optional<City> findById(Long id);

    City save(City city);

    void remove(Long id);
}
