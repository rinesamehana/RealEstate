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
                .ForMember(d => d.DisplayName, o => o.MapFrom(s => s.DisplayName));
            CreateMap<Rezervimi, Profiles.UserProfile>()
                .ForMember(d => d.Check_in, o => o.MapFrom(s => s.Check_in))
                .ForMember(d => d.Check_out, o => o.MapFrom(s => s.Check_out))
                .ForMember(d => d.nrPersonave, o => o.MapFrom(s => s.nrPersonave))
                .ForMember(d => d.Pagesa, o => o.MapFrom(s => s.Pagesa));
              
        }
    }
}