using AutoMapper;
using Data.EntityModel;
using ESite.Data.ViewModel;

namespace ESite
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<TblUser, UserViewModel>().ConstructUsing((source, _) => new UserViewModel(source));
			CreateMap<TblCompany, CompanyViewModel>().ConstructUsing((source, _) => new CompanyViewModel(source));
			CreateMap<TblRecitifier, AssetRecitifierViewModel>().ConstructUsing((source, _) => new AssetRecitifierViewModel(source));
            CreateMap<TblSite, SiteViewModel>().ConstructUsing((source, _) => new SiteViewModel(source))
            .ForMember(dest => dest.RegionName, opt => opt.MapFrom(src => src.Region.RegionName))
            .ForMember(dest => dest.CountryName, opt => opt.MapFrom(src => src.CountryNavigation.CountryName))
            .ForMember(dest => dest.StateName, opt => opt.MapFrom(src => src.StateNavigation.StateName))
            .ForMember(dest => dest.CoolingTypeName, opt => opt.MapFrom(src => src.CoolingTypeNavigation.CoolingType))
            .ForMember(dest => dest.SiteTypeName, opt => opt.MapFrom(src => src.SiteTypeNavigation.SiteType));



        }
    }
}
