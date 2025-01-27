<template>
  <div class="categories-page">
    <h1>Categories</h1>
    <button @click="showAddCategoryModal = true">Add</button>
    <div v-for="category in categories" :key="category">
      <button @click="editCategory(category)">Edit</button>
      {{ category }}
    </div>


  </div>
</template>

<script>

export default {
  name: "CategoriesPage",

  data() {
    return {
      categories: ["Category 1", "Category 2"],
      showAddCategoryModal: false,
      showEditCategoryModal: false,
      currentCategory: "",
    };
  },
  methods: {
    addCategory(categoryName) {
      this.categories.push(categoryName);
      this.showAddCategoryModal = false;
    },
    editCategory(categoryName) {
      this.currentCategory = categoryName;
      this.showEditCategoryModal = true;
    },
    saveCategory(updatedCategoryName) {
      const index = this.categories.indexOf(this.currentCategory);
      if (index !== -1) {
        this.categories[index] = updatedCategoryName;
      }
      this.showEditCategoryModal = false;
    },
    deleteCategory() {
      this.categories = this.categories.filter(
          (category) => category !== this.currentCategory
      );
      this.showEditCategoryModal = false;
    },
  },
};
</script>

<style scoped>
/* Layout styles */
.categories-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Heading */
.categories-page h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

/* Actions */
.actions {
  margin-bottom: 20px;
}

.add-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #218838;
}

/* Categories List */
.categories-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.category-item {
  padding: 15px 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: calc(33.33% - 20px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.category-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.category-item p {
  font-size: 1rem;
  margin-bottom: 10px;
  color: #555;
}

/* Edit Button */
.edit-button {
  padding: 8px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
}

.edit-button:hover {
  background-color: #0056b3;
}
</style>
