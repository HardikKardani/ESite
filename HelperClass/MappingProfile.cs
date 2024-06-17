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
            CreateMap<TblSite, SiteViewModel>().ConstructUsing((source, _) => new SiteViewModel(source));

        }
    }
}
