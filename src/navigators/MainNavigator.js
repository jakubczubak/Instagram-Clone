import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NewsFeed } from '../screens/NewsFeed';
import { Search } from '../screens/Search';

const Tab = createBottomTabNavigator();

export function MainNavigator() {
  return (
    <Tab.Navigator initialRouteName='News feed'>
      <Tab.Screen name="News feed" component={NewsFeed} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}