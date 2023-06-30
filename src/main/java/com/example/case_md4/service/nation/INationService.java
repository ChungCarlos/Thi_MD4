package com.example.case_md4.service.nation;

import com.example.case_md4.model.Nation;
import com.example.case_md4.service.IGeneralService;

import java.util.Optional;

public interface INationService extends IGeneralService<Nation> {
    Iterable<Nation> findAll();

    Optional<Nation> findById(Long id);

    Nation save(Nation nation);

    void remove(Long id);
}
