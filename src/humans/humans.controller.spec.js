import { Test } from '@nestjs/testing';
import { HumansController } from './humans.controller';

describe('Humans Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [HumansController],
    }).compile();

    controller = module.get(HumansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
