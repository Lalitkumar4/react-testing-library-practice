const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "John",
          last: "Doe",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/95.jpg",
        },
        login: {
          username: "The GOAT",
        },
      },
    ],
  },
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
}
