using AutoMapper;
using Forums.API.Dtos;
using Forums.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Forums.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Module, ModulesForListDto>()
                .ForMember(dest => dest.Id,
                opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.ModuleName,
                opt => opt.MapFrom(src => src.Name));
        }
    }
}
