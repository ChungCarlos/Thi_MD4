package com.example.case_md4.controller;

import com.example.case_md4.model.City;
import com.example.case_md4.service.city.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/city")
public class CityController {
    @Autowired
    private ICityService iCityService;
    // Hiển thị tất cả thành phố
    @GetMapping
    public ResponseEntity<Iterable<City>> allCity() {
        return new ResponseEntity<>(iCityService.findAll(), HttpStatus.OK);
    }
    // Hiển thị chi tiết 1 thành phố.
    @PatchMapping("/{id}")
    public ResponseEntity<City> detailCity(@PathVariable Long id){
        Optional<City> cityOptional = iCityService.findById(id);
        if (!cityOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(cityOptional.get(), HttpStatus.OK);
    }
    // Tạo mới 1 thành phố
    @PostMapping
    public ResponseEntity<City> createCity(@RequestBody City city) {
        return new ResponseEntity<>(iCityService.save(city), HttpStatus.CREATED);
    }
    // Update thông tin city
    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable Long id, @RequestBody City city) {
        if (this.iCityService.findById(id).isPresent()) {
            city.setId(id);
            this.iCityService.save(city);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    // Xoá city
    @DeleteMapping("/{id}")
    public ResponseEntity<City> deleteCity(@PathVariable Long id) {
        Optional<City> cityOptional = iCityService.findById(id);
        if (!cityOptional.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        iCityService.remove(id);
        return new ResponseEntity<>(cityOptional.get(), HttpStatus.NO_CONTENT);
    }
}
