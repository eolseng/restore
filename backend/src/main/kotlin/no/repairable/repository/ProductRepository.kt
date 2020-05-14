package no.repairable.repository

import no.repairable.entity.Product
import org.springframework.data.repository.CrudRepository

//Crud = Create, Read, Update & Delete
public interface ProductRepository : CrudRepository<Product, Long>{

    //CrudRepository delivers default methods for crud operations
}