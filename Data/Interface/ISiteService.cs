﻿using ESite.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ESite.Data.Interface
{
    public interface ISiteService 
	{
		ResponseViewModel GetCardDataList();
		ResponseViewModel GetLiveData();
        ResponseViewModel GetRectifierData();
        ResponseViewModel GetSolarData();
        ResponseViewModel GetGeneratorData();
        ResponseViewModel GetBatteryData();
        ResponseViewModel GetGridData();
        ResponseViewModel GetNotificationsData();
        ResponseViewModel GetSysytemData();
        
    }
}
