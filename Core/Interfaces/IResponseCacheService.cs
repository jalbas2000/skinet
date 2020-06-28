using System;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IResponseCacheService
    {
         Task CacheResponseAsync(string CacheKey, object response, TimeSpan timeToLive);
         Task<string> GetCachedResponseAsync(string cacheKey);
    }
}