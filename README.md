# Job Search App README

## Overview

This app provides a user interface for viewing featured and popular job listings. It includes user authentication and basic search functionality.

## Components Usage

### Homescreen

The `Homescreen` component is the main screen of the application. It displays the user information, search bar, featured jobs, and popular jobs.

#### Props

- `route`: React Navigation prop that contains parameters passed from the previous screen, specifically `name` and `email`.

#### Usage

- Displays user information at the top, including name and email.
- Includes a search bar with an icon for search and a filter icon.
- Shows a list of featured jobs in a horizontal scrollable list.
- Displays popular jobs in a vertical scrollable list.

### FlatList

Both the featured jobs and popular jobs sections use the `FlatList` component to render lists of data efficiently.

#### Props

- `data`: Array of data to be rendered.
- `keyExtractor`: Function that extracts a unique key for each item.
- `renderItem`: Function that renders each item of the list.

#### Usage

- `FlatList` is used to display both the featured jobs and popular jobs sections.
- It efficiently renders lists with horizontal scrolling for featured jobs and vertical scrolling for popular jobs.
- Each item in the list consists of an image and related job details.

### TextInput

The `TextInput` component is used for the search bar functionality.

#### Props

- `style`: Styles for the text input.
- `placeholder`: Placeholder text displayed when the input is empty.

#### Usage

- Allows users to input text to search for specific job titles or positions.
- Styled with a search icon on the left side for visual clarity.

### TouchableOpacity

The `TouchableOpacity` component is used for clickable elements like "See all" links.

#### Props

- `onPress`: Function to be called when the touchable element is pressed.

#### Usage

- Provides clickable "See all" links for both featured jobs and popular jobs sections.
- Enhances user interaction by providing visual feedback upon touch.

### Image

The `Image` component displays images associated with job listings and user avatars.

#### Props

- `source`: Specifies the image source.

#### Usage

- Displays user avatar at the top of the screen.
- Shows company logos or job images within each job listing.


### Icon (from react-native-vector-icons)

The `Icon` component renders icons for search and filter functionality.

#### Props

- `name`: Specifies the icon name.
- `size`: Specifies the icon size.
- `color`: Specifies the icon color.

#### Usage

- Displays a search icon within the search bar for visual indication of search functionality.
- Shows a filter icon next to the search bar for potential future filtering features.

## Styles

The `styles` object includes CSS-like styles applied to various components throughout the application.

#### Usage

- Defines styles for text elements (`userName`, `sectionTitle`, etc.), containers (`userInfo`, `searchSection`, etc.), and specific components (`featuredJobCard`, `jobItem`, etc.).
- Ensures consistent visual presentation and layout across different screen sizes and devices.

## Conclusion

This README provides an overview of the main components used in the Job Search App, detailing their purpose and usage within the application's context.

## Screenshots
![1](https://github.com/MaameLissa/rn-assignment4-11263472/assets/170031712/9633da84-30dd-4a48-8f36-c481b026b49c)
![9](https://github.com/MaameLissa/rn-assignment4-11263472/assets/170031712/3280cb87-e0c0-49bf-b842-3710ac022d5d)
![2](https://github.com/MaameLissa/rn-assignment4-11263472/assets/170031712/10c53b33-47a6-4a9b-85d8-9da9a329f0b7)
![3](https://github.com/MaameLissa/rn-assignment4-11263472/assets/170031712/c6cae8ab-5b99-467d-a6b8-3b8d4fd9f24c)
![4](https://github.com/MaameLissa/rn-assignment4-11263472/assets/170031712/de2e049a-e370-4be5-87a3-cc794a670e07)
![6](https://github.com/MaameLissa/rn-assignment4-11263472/assets/170031712/49669977-8f02-4fef-8ad4-17f683efad6b)
![5](https://github.com/MaameLissa/rn-assignment4-11263472/assets/170031712/65b524eb-6871-4a01-bf15-de33e9067b1d)
![7](https://github.com/MaameLissa/rn-assignment4-11263472/assets/170031712/4071b521-8ba3-4fb9-9de8-1f840c2d8074)
![8](https://github.com/MaameLissa/rn-assignment4-11263472/assets/170031712/4c66cb2c-7e0e-4322-a8cc-a614aef7261a)
![10](https://github.com/MaameLissa/rn-assignment4-11263472/assets/170031712/19386bca-15d8-43bb-88dc-ee87b85bd255)


