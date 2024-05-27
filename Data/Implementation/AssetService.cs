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
    internal class AssetService : IAssetService
	{
        ESiteContext _context;
		private readonly IMapper _mapper;
		public AssetService(ESiteContext context, IMapper mapper)
		{
			_mapper = mapper;
			_context = context;
		}
		public async Task<ResponseViewModel> SaveRecitifier(AssetRecitifierViewModel model)
		{
			ResponseViewModel _Response = new ResponseViewModel();
			_Response.Status = false;
			try
			{
				TblRecitifier? tblRecitifier = await _context.TblRecitifiers.Where(x => x.SlNo == model.SlNo).FirstOrDefaultAsync();
				if (tblRecitifier == null)
				{
					tblRecitifier = new TblRecitifier();
					tblRecitifier.CreatedBy = model.CreatedBy;
					tblRecitifier.CreatedDate = DataComman.GetDateTimeNow();
					tblRecitifier.IsDeleted = false;
					_context.TblRecitifiers.Add(tblRecitifier);
				}
				tblRecitifier.NoOfRecitifier =model.NoOfRecitifier;
				tblRecitifier.Type = model.Type;
				tblRecitifier.Make = model.Make;
				tblRecitifier.Model = model.Model;
				tblRecitifier.Manufacturer = model.Manufacturer;
				tblRecitifier.LastServicedOn = model.LastServicedOn;
				tblRecitifier.NextServiceOn =	model.NextServiceOn;
				tblRecitifier.Remarks =model.Remarks;
				tblRecitifier.Notify = model.Notify;
				tblRecitifier.CompanyId = model.CompanyId;
				tblRecitifier.IsDeleted = false;
				tblRecitifier.ModifiedBy = model.CreatedBy;
				tblRecitifier.ModifiedDate = DataComman.GetDateTimeNow();
				await _context.SaveChangesAsync();
				_Response.Status = true;
				_Response.Message = MessageType.Saved;
			}
			catch (Exception ex)
			{
				_Response.Message = DataComman.GetString(ex);
			}
			return _Response;
		}

	}
}
