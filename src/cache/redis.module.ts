import { Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import * as dotenv from 'dotenv';
import { RedisCacheService } from './redis.service';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisController } from './redis.controller';
dotenv.config();

console.log(process.env.REDIS_HOST, process.env.REDIS_PORT);
const cacheModule = CacheModule.register({
  useFactory: async () => ({
    store: redisStore,
    host: 'localhost', // env에서 정의함
    port: 6379, // env에서 정의함
    ttl: 900000, // 캐시 유지 시간
  }),
});

@Module({
  imports: [cacheModule],
  controllers: [RedisController],
  providers: [RedisCacheService],
  exports: [RedisCacheService],
})
export class RedisCacheModule {}
