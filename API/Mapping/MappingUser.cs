using System.Linq;
using API.DTOs;
using AutoMapper;
using Domain;


namespace API.Mapping
{
    public class MappingUser : Profile
    {
        public MappingUser()
        {
            CreateMap<AppUser, GetUserDto>()
                .ForMember(d => d.Image, o => o.MapFrom(s => s.Photos.FirstOrDefault(x=>x.IsMain).Url));
            CreateMap<Rezervimi, Profiles.UserProfile>()
                .ForMember(d => d.Check_in, o => o.MapFrom(s => s.Check_in))
                .ForMember(d => d.Check_out, o => o.MapFrom(s => s.Check_out))
                .ForMember(d => d.nrPersonave, o => o.MapFrom(s => s.nrPersonave))
                .ForMember(d => d.Pagesa, o => o.MapFrom(s => s.Pagesa))
                .ForMember(d => d.Kontrata, o => o.MapFrom(s => s.Kontrata));
              
        }
    }
}