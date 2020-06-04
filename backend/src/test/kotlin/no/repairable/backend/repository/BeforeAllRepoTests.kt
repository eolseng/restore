package no.repairable.no.repairable.backend.repository

import no.repairable.backend.entity.*
import no.repairable.backend.repository.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.TestInstance
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager
import org.springframework.test.context.ActiveProfiles

@ActiveProfiles("test")
@DataJpaTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class BeforeAllRepoTests {

    @Autowired
    lateinit var actualProductRepository: ActualProductRepository

    @Autowired
    lateinit var productRepository: ProductRepository

    @Autowired
    lateinit var entityManager: TestEntityManager

    @Autowired
    lateinit var colorRepository: ColorRepository

    @Autowired
    lateinit var genderRepository: GenderRepository

    @Autowired
    lateinit var categoryRepository: CategoryRepository

    @Autowired
    lateinit var subCategoryRepository: SubCategoryRepository

    @Autowired
    lateinit var baseColorRepository: BaseColorRepository

    @Autowired
    lateinit var sizeRepository: SizeRepository


    @BeforeEach
    fun startup() {

        val baseColor1 = BaseColor(name = "blue")
        val baseColor2 = BaseColor(name = "red")
        val baseColor3 = BaseColor(name = "black")
        baseColorRepository.save(baseColor1)
        baseColorRepository.save(baseColor2)
        baseColorRepository.save(baseColor3)

        val color = Color(name = "Blue dragon", baseColor = baseColor1)
        val color2 = Color(name = "Red Wing", baseColor = baseColor2)
        val color3 = Color(name = "Slick Oil", baseColor = baseColor3)
        val colors: MutableList<Color> = mutableListOf()
        val colors1: MutableList<Color> = mutableListOf()

        colors.add(color)
        colors.add(color2)
        colors1.add(color3)
        colorRepository.saveAll(colors)
        colorRepository.saveAll(colors1)

        val male = Gender(name = "male")
        val female = Gender(name = "female")
        genderRepository.save(male)
        genderRepository.save(female)

        val category1 = Category(name = "Jakker")
        val category2 = Category(name = "Bukser")
        val category3 = Category(name = "Skinnvester")
        categoryRepository.save(category1)
        categoryRepository.save(category2)
        categoryRepository.save(category3)

        val subCategory1 = SubCategory(name = "Vindjakke")
        val subCategory2 = SubCategory(name = "Skallbukse")
        val subCategory3 = SubCategory(name = "Skinn")
        val subCategory4 = SubCategory(name = "Pels")
        subCategoryRepository.save(subCategory1)
        subCategoryRepository.save(subCategory2)
        subCategoryRepository.save(subCategory3)
        subCategoryRepository.save(subCategory4)

        val small = Size(name = "S")
        val medium = Size(name = "M")
        val large = Size(name = "L")
        val sizes: MutableList<Size> = mutableListOf()
        sizes.add(large)
        sizes.add(medium)
        sizes.add(small)
        sizeRepository.saveAll(sizes)

        entityManager.persist(Product(name = "Windorama", colors = colors, gender = male, category = category1, subCategory = subCategory1, sizes = sizes))
        entityManager.persist(Product(name = "Skallorama", colors = colors, gender = female, category = category2, subCategory = subCategory2, sizes = sizes))
        entityManager.persist(Product(name = "Skinnesen", colors = colors1, gender = male, category = category3, subCategory = subCategory4, sizes = sizes))
        entityManager.persist(Product(name = "Vestesen", colors = colors1, gender = female, category = category3, subCategory = subCategory3, sizes = sizes))


    }

}
