using AutoMapper;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.ShtepiaA;
using Application.RezervimA;
using Application.StafiA;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Gjinia, Gjinia>();
            CreateMap<LlojiUser, LlojiUser>();
            CreateMap<Lagjja, Lagjja>();
            CreateMap<KohaEPunes, KohaEPunes>();
            CreateMap<RoliUser, RoliUser>();
            CreateMap<Ambienti, Ambienti>();
            CreateMap<Shteti, Shteti>();
            CreateMap<Qyteti, Qyteti>();
            CreateMap<Stafi, Stafi>();
            CreateMap<Pamja, Pamja>();
            CreateMap<GjendjaShtepise, GjendjaShtepise>();
            CreateMap <Kafshet , Kafshet>();
            CreateMap <Kontrata , Kontrata>();
            CreateMap <Pajisja , Pajisja>();
            CreateMap <LlojiShtepise , LlojiShtepise>();
            CreateMap <MenyraPageses, MenyraPageses>();
            CreateMap <Shtepia, Shtepia>();
            // CreateMap<Shtepia, ShtepiaDto>()
            //  .ForMember(d=>d.HostUsername, o=>o.MapFrom(s=>s.Attendees
            //  .FirstOrDefault(x=>x.IsHost).AppUser.UserName));

            // CreateMap<Rezervimi, Profiles.Profile>()
            // .ForMember(d=>d.DisplayName, o=>o.MapFrom(s=>s.AppUser.DisplayName))
            // .ForMember(d=>d.Username, o=>o.MapFrom(s=>s.AppUser.UserName));

            // // CreateMap<Stafi, StafiDto>()
            // //   .ForMember(d=>d.HostUsername, o=>o.MapFrom(s=>s.Shtepitee
            // //  .FirstOrDefault(x=>x.Shtepia).AppUser.UserName));

            //  CreateMap<StafiShtepia, Profiles.Profile>()
            //  .ForMember(d=>d.DisplayName , o=>o.MapFrom(s=>s.Shtepia.LlojiShtepise))
            //  .ForMember(d=>d.Username,  o=>o.MapFrom(s=>s.Shtepia.ShtepiaId));

            // CreateMap<Rezervimi, Profiles.Profile>()
            // .ForMember(d=>d.DisplayName, o=>o.MapFrom(s=>s.AppUser.DisplayName))
            // .ForMember(d=>d.Username, o=>o.MapFrom(s=>s.AppUser.UserName));

           
             CreateMap <Rezervimi, Rezervimi>();
             CreateMap<Rezervimi, RezervimiDto>()
                  .ForMember(e => e.HostUsername, o => o.MapFrom(s=> s.Attendees
                  .FirstOrDefault(x => x.IsHost).AppUser.UserName));
           
            CreateMap<RezervimiAttendee, Profiles.Profile>()
                 .ForMember(e => e.DisplayName, o => o.MapFrom(s => s.AppUser.DisplayName))
                 .ForMember(e => e.Username, o => o.MapFrom(s => s.AppUser.UserName));
                //   .ForMember(e => e.Bio, o => o.MapFrom(s => s.AppUser.Bio));
        }
    }
}