package com.lukejanssen.dfwdictionary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lukejanssen.dfwdictionary.model.Word;

@Repository
public interface WordRepository extends JpaRepository<Word, Integer> {

}
