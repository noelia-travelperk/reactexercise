export default {
    get: jest.fn().mockResolvedValue({ data: {} })
  };
  afterEach(cleanup);
    jest.mock('axios');