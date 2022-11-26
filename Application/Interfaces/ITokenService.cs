

using System.Threading.Tasks;
using Domain;

namespace Application.Interfaces
{
    public interface ITokenService
    {
        Task<string> CreateToken(AppUser user);
    }
}