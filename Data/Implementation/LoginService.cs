using AutoMapper;
using Azure;
using Data.EntityModel;
using Data.EntityModel.Partialclass;
using ESite.Data.HelperClass;
using ESite.Data.Interface;
using ESite.Data.ViewModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESite.Data.Implementation
{
    internal class LoginService : ILoginService
	{
        ESiteContext _context;
		private readonly IMapper _mapper;
		public LoginService(ESiteContext context, IMapper mapper)
		{
			_mapper = mapper;
			_context = context;
		}
		public async Task<ResponseViewModel> GetLogin(LoginViewModel model)
		{
			ResponseViewModel _Response = new ResponseViewModel();
			_Response.Status = false;
			try
			{
				TblUser? user = await _context.TblUsers
					.AsNoTracking().Where(x =>  x.UserName.Equals(model.UserName) && x.Password == DataComman.EncryptNumber(model.Password)).FirstOrDefaultAsync();
				if (user != null)
				{
					_Response.Response = _mapper.Map<TblUser, UserViewModel>(user);
					_Response.Message = "Success";
					_Response.Status = true;
				}
				else
				{
					_Response.Message = "User name or Password is incorrect";
				}
			}
			catch (Exception ex)
			{
				_Response.Message = DataComman.GetString(ex);
			}
			return _Response;
		}

	}
}
