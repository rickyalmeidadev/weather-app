import '@testing-library/jest-native/extend-expect';
import server from '@app/mocks/server';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('expo-location', () => ({
  getCurrentPositionAsync: jest.fn(() => ({
    coords: { latitude: 0, longitude: 0 },
  })),
  requestForegroundPermissionsAsync: jest.fn(() => ({
    status: 'granted',
  })),
}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
