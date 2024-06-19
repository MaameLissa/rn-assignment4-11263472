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
