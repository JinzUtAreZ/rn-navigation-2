import React, { useEffect, useCallback } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import DefaultTextStyle from '../components/DefaultText';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/mealsAction';

const ListItems = props => {
  return (
    <View style={styles.listItems}>
      <DefaultTextStyle>{props.children}</DefaultTextStyle>
    </View>
  );
};

const MealDetailScreen = props => {
  const availMeals = useSelector(state => state.meals.meals);

  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = availMeals.find(meal => meal.id === mealId);
  //console.log(selectedMeal, mealId);

  const dispatch = useDispatch();

  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  // useEffect after all components of the screen rendered
  useEffect(() => {
    //props.navigation.setParam({mealTitle: selectedMeal.title})
    props.navigation.setParams({ toggleFav: toggleFavHandler });
  }, [toggleFavHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultTextStyle>{selectedMeal.duration}m</DefaultTextStyle>
        <DefaultTextStyle>
          {selectedMeal.complexity.toUpperCase()}
        </DefaultTextStyle>
        <DefaultTextStyle>
          {selectedMeal.affordability.toUpperCase()}
        </DefaultTextStyle>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItems key={ingredient}>{ingredient}</ListItems>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItems key={step}>{step}</ListItems>
      ))}
      <View style={styles.screen}>
        <Text>{selectedMeal.title}</Text>
        <Button
          title="Go Back to Categories"
          onPress={() => {
            props.navigation.popToTop();
          }}
        />
      </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavorite = navigationData.navigation.getParam('toggleFav');
  //const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: mealTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Favorite" iconName="ios-star" onPress={toggleFavorite} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItems: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailScreen;
