import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
import { useSelector } from 'react-redux';

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const availMeals = useSelector(state => state.meals.filteredMeals); // galing App.js ung meals, mealsReducer ung filteredMeals

  const displayedMeals = availMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>NO MEALS FOUND!! check your filters</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
