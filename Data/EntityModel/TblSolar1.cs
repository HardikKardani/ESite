using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class TblSolar1
{
    public long SlNo { get; set; }

    public long SiteId { get; set; }

    public long? CompanyId { get; set; }

    public DateTime Date { get; set; }

    public string? SerialNo { get; set; }

    public double Ipvoltage { get; set; }

    public double Ipcurrent { get; set; }

    public double Ippower { get; set; }

    public double SolarKwh { get; set; }

    public double SolarRunTime { get; set; }

    public double Opvoltage { get; set; }

    public double Opcurrent { get; set; }

    public double Temp { get; set; }

    public string Dcstate { get; set; } = null!;

    public string Status { get; set; } = null!;

    public virtual TblCompany? Company { get; set; }

    public virtual TblSite Site { get; set; } = null!;
}
