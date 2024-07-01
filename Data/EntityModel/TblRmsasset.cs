using System;
using System.Collections.Generic;

namespace Data.EntityModel;

public partial class TblRmsasset
{
    public long SlNo { get; set; }

    public long? SiteId { get; set; }

    public bool? IsAirconController1Available { get; set; }

    public byte? AirconController1Visible { get; set; }

    public string? AirconController1Remarks { get; set; }

    public bool? IsAirconController2Available { get; set; }

    public byte? AirconController2Visible { get; set; }

    public string? AirconController2Remarks { get; set; }

    public bool? IsDgcontrolllerAvailable { get; set; }

    public byte? DgcontrolllerVisible { get; set; }

    public string? DgcontrolllerRemarks { get; set; }

    public bool? IsEnclosureAvailable { get; set; }

    public byte? EnclosureVisible { get; set; }

    public string? EnclosureRemarks { get; set; }

    public bool? IsCameraAvailable { get; set; }

    public byte? CameraVisible { get; set; }

    public byte? CameraType { get; set; }

    public string? CameraIpaddress { get; set; }

    public bool? IsCameraAvailable1 { get; set; }

    public byte? CameraVisible1 { get; set; }

    public byte? CameraType1 { get; set; }

    public string? CameraIpaddress1 { get; set; }

    public bool? IsCameraAvailable2 { get; set; }

    public byte? CameraVisible2 { get; set; }

    public byte? CameraType2 { get; set; }

    public string? CameraIpaddress2 { get; set; }

    public bool? IsCameraAvailable3 { get; set; }

    public byte? CameraVisible3 { get; set; }

    public byte? CameraType3 { get; set; }

    public string? CameraIpaddress3 { get; set; }

    public long? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public long? ModifiedBy { get; set; }

    public DateTime? ModifiedDate { get; set; }

    public bool? IsDeleted { get; set; }

    public virtual TblSite? Site { get; set; }
}
