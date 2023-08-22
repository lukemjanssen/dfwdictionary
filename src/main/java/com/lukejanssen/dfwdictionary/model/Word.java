package com.lukejanssen.dfwdictionary.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Word {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;
        private String word;
        private String definition;

        public Word() {
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getWord() {
            return word;
        }

        public void setWord(String word) {
            this.word = word;
        }

        public String getDefinition() {
            return definition;
        }

        public void setDefinition(String definition) {
            this.definition = definition;
        }

        public int getLength() {
            return word.length();
        }

        

        

}
