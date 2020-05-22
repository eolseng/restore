package no.repairable.backend.controller

import no.repairable.backend.entity.*
import no.repairable.backend.repository.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.rest.webmvc.RepositoryRestController
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import kotlin.reflect.typeOf


@RepositoryRestController
class ProductsCreationController @Autowired constructor(
        private val productRepository: ProductRepository,
        private val genderRepository: GenderRepository,
        private val sizeRepository: SizeRepository,
        private val brandRepository: BrandRepository,
        private val categoryRepository: CategoryRepository,
        private val subCategoryRepository: SubCategoryRepository


) {


    @PostMapping("/api/products")
    private fun insertProducts(@RequestBody products: List<ProductPostClass>) {

        val genders: HashMap<String, Gender> = HashMap()
        val brands: HashMap<String, Brand> = HashMap()
        val categories: HashMap<String, Category> = HashMap()
        val subCategories: HashMap<String, SubCategory> = HashMap()

        for(product in products){
            var gender  = genders[product.gender]
            if(gender == null){
                gender = genderRepository.findGenderByGenderType(product.gender)
                if(gender == null){
                    gender = Gender(genderType = product.gender)
                    genderRepository.save(gender)
                }
                genders[product.gender] = gender
            }



            if(!brands.containsKey(product.brand)){
                brandRepository.findBrandByName(product.brand)
            }
            if(!categories.containsKey(product.category)){
                categoryRepository.findCategoriesByName(product.category)
            }
            if(!subCategories.containsKey(product.subCategory)){
                subCategoryRepository.findSubCategoriesByName(product.subCategory)
            }


        }
        productRepository.save(Product())
    }
}

data class ProductPostClass(
        val name:String,
        val description: String,
        val gender: String,
        val brand: String,
        val category:String,
        val subCategory: String
)
