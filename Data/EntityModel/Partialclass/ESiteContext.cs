using System;
using System.Collections.Generic;
using DocumentFormat.OpenXml.Vml.Office;
using Microsoft.EntityFrameworkCore;

namespace Data.EntityModel.Partialclass;

public partial class ESiteContext : DbContext
{
    public ESiteContext()
    {
    }

    public ESiteContext(DbContextOptions<ESiteContext> options)
        : base(options)
    {
    }

    public virtual DbSet<BatteryGstatus> BatteryGstatuses { get; set; }

    public virtual DbSet<InputRunHr> InputRunHrs { get; set; }

    public virtual DbSet<InputStatus> InputStatuses { get; set; }

    public virtual DbSet<LiveDatum> LiveData { get; set; }

    public virtual DbSet<SolarGstau> SolarGstaus { get; set; }

    public virtual DbSet<SolarIndvStatus> SolarIndvStatuses { get; set; }

    public virtual DbSet<TblAssetType> TblAssetTypes { get; set; }

    public virtual DbSet<TblBattery> TblBatteries { get; set; }

    public virtual DbSet<TblBattery1> TblBatteries1 { get; set; }

    public virtual DbSet<TblBatteryPerformance> TblBatteryPerformances { get; set; }

    public virtual DbSet<TblCamera> TblCameras { get; set; }

    public virtual DbSet<TblCompany> TblCompanies { get; set; }

    public virtual DbSet<TblCoolingType> TblCoolingTypes { get; set; }

    public virtual DbSet<TblCountry> TblCountries { get; set; }

    public virtual DbSet<TblDetail> TblDetails { get; set; }

    public virtual DbSet<TblDg> TblDgs { get; set; }

    public virtual DbSet<TblDgdetail> TblDgdetails { get; set; }

    public virtual DbSet<TblDgprimary> TblDgprimaries { get; set; }

    public virtual DbSet<TblEnergyLogSolar> TblEnergyLogSolars { get; set; }

    public virtual DbSet<TblEnergyLogsAc> TblEnergyLogsAcs { get; set; }

    public virtual DbSet<TblEnergyLogsBattery> TblEnergyLogsBatteries { get; set; }

    public virtual DbSet<TblEnergyLogsLoad> TblEnergyLogsLoads { get; set; }

    public virtual DbSet<TblGrid> TblGrids { get; set; }

    public virtual DbSet<TblImage> TblImages { get; set; }

    public virtual DbSet<TblLoad> TblLoads { get; set; }

    public virtual DbSet<TblManufacturer> TblManufacturers { get; set; }

    public virtual DbSet<TblMenuMaster> TblMenuMasters { get; set; }

    public virtual DbSet<TblMenuPermission> TblMenuPermissions { get; set; }

    public virtual DbSet<TblOther> TblOthers { get; set; }

    public virtual DbSet<TblPerformance> TblPerformances { get; set; }

    public virtual DbSet<TblRecitiferGstatus> TblRecitiferGstatuses { get; set; }

    public virtual DbSet<TblRecitiferIndividualStatus> TblRecitiferIndividualStatuses { get; set; }

    public virtual DbSet<TblRecitifier> TblRecitifiers { get; set; }

    public virtual DbSet<TblRecitifier1> TblRecitifiers1 { get; set; }

    public virtual DbSet<TblRegion> TblRegions { get; set; }

    public virtual DbSet<TblRmsasset> TblRmsassets { get; set; }

    public virtual DbSet<TblRole> TblRoles { get; set; }

    public virtual DbSet<TblRunHrsLogsAc> TblRunHrsLogsAcs { get; set; }

    public virtual DbSet<TblRunHrsLogsBattery> TblRunHrsLogsBatteries { get; set; }

    public virtual DbSet<TblRunHrsLogsSolar> TblRunHrsLogsSolars { get; set; }

    public virtual DbSet<TblServiceHistory> TblServiceHistories { get; set; }

    public virtual DbSet<TblSimOperator> TblSimOperators { get; set; }

    public virtual DbSet<TblSite> TblSites { get; set; }

    public virtual DbSet<TblSiteType> TblSiteTypes { get; set; }

    public virtual DbSet<TblSolar> TblSolars { get; set; }

    public virtual DbSet<TblSolar1> TblSolars1 { get; set; }

    public virtual DbSet<TblState> TblStates { get; set; }

    public virtual DbSet<TblTenant> TblTenants { get; set; }

    public virtual DbSet<TblTenantSiteAsset> TblTenantSiteAssets { get; set; }

    public virtual DbSet<TblUser> TblUsers { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BatteryGstatus>(entity =>
        {
            entity.HasKey(e => e.SlNo).HasName("PK_Table_2");

            entity.ToTable("BatteryGStatus", "Input");

            entity.Property(e => e.Bat1Soc).HasColumnName("Bat1SOC");
            entity.Property(e => e.Bat2Soc).HasColumnName("Bat2SOC");
            entity.Property(e => e.Bat3Soc).HasColumnName("Bat3SOC");
            entity.Property(e => e.Bat4Soc).HasColumnName("Bat4SOC");
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DateTime).HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.BatteryGstatuses)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_BatteryGStatus_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.BatteryGstatuses)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_BatteryGStatus_tblSite");
        });

        modelBuilder.Entity<InputRunHr>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("InputRunHrs", "Input");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DateTime).HasColumnType("datetime");
            entity.Property(e => e.DgrunHrs).HasColumnName("DGRunHrs");
            entity.Property(e => e.EbrunHrs).HasColumnName("EBRunHrs");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.InputRunHrs)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_InputRunHrs_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.InputRunHrs)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_InputRunHrs_tblSite");
        });

        modelBuilder.Entity<InputStatus>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("InputStatus", "Input");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DateTime).HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.InputStatuses)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_InputStatus_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.InputStatuses)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_InputStatus_tblSite");
        });

        modelBuilder.Entity<LiveDatum>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("LiveData", "Site");

            entity.Property(e => e.BatteryStatus).HasMaxLength(100);
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DateTime).HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.RecStatus).HasMaxLength(100);
            entity.Property(e => e.SiteRunningOn).HasMaxLength(100);

            entity.HasOne(d => d.Company).WithMany(p => p.LiveData)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_LiveData_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.LiveData)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_LiveData_tblSite");
        });

        modelBuilder.Entity<SolarGstau>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("SolarGStaus", "Input");

            entity.Property(e => e.ActiveHlvcount).HasColumnName("ActiveHLVCount");
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DateTime).HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.SolarAm).HasColumnName("SolarAM");
            entity.Property(e => e.TotalSolarHr).HasColumnName("TotalSolarHR");
            entity.Property(e => e.TotalSolarKwh).HasColumnName("TotalSolarKWH");

            entity.HasOne(d => d.Company).WithMany(p => p.SolarGstaus)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_SolarGStaus_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.SolarGstaus)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_SolarGStaus_tblSite");
        });

        modelBuilder.Entity<SolarIndvStatus>(entity =>
        {
            entity.HasKey(e => e.SolarGstaus);

            entity.ToTable("SolarIndvStatus", "Input");

            entity.Property(e => e.SolarGstaus).HasColumnName("SolarGStaus");
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DateTime).HasColumnType("datetime");
            entity.Property(e => e.Dcstate)
                .HasMaxLength(50)
                .HasColumnName("DCState");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.SerialNo).HasMaxLength(250);
            entity.Property(e => e.SolarKwh).HasColumnName("SolarKWH");
            entity.Property(e => e.Status).HasMaxLength(250);

            entity.HasOne(d => d.Company).WithMany(p => p.SolarIndvStatuses)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_SolarIndvStatus_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.SolarIndvStatuses)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_SolarIndvStatus_tblSite");
        });

        modelBuilder.Entity<TblAssetType>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblAssetType", "Master");

            entity.HasIndex(e => e.AssetType, "UQ__tblAsset__7F6321AA6F207A19").IsUnique();

            entity.Property(e => e.AssetType).HasMaxLength(200);
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description).HasMaxLength(500);
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblAssetTypes)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblAssetType_CompanyId");
        });

        modelBuilder.Entity<TblBattery>(entity =>
        {
            entity.HasKey(e => e.SlNo).HasName("PK_tblBattery_1");

            entity.ToTable("tblBattery", "Asset");

            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastServicedOn).HasColumnType("datetime");
            entity.Property(e => e.Make).HasMaxLength(100);
            entity.Property(e => e.Model).HasMaxLength(100);
            entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            entity.Property(e => e.NextServiceOn).HasColumnType("datetime");
            entity.Property(e => e.RefSiteId).HasColumnName("refSiteId");
            entity.Property(e => e.Remarks).HasMaxLength(500);
            entity.Property(e => e.SerialNo).HasMaxLength(250);
            entity.Property(e => e.Type).HasMaxLength(100);
            entity.Property(e => e.WarrantyEndDate).HasColumnType("datetime");
            entity.Property(e => e.WarrantyStartDate).HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblBatteries)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblBattery_CompanyId");

            entity.HasOne(d => d.ManufacturerNavigation).WithMany(p => p.TblBatteries)
                .HasForeignKey(d => d.Manufacturer)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblBattery_tblManufacturer");

            entity.HasOne(d => d.RefSite).WithMany(p => p.TblBatteries)
                .HasForeignKey(d => d.RefSiteId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblBattery_tblSite");
        });

        modelBuilder.Entity<TblBattery1>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblBattery", "Energy");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Date).HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblBattery1s)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblBattery_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblBattery1s)
                .HasForeignKey(d => d.SiteId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblBattery_tblSite");
        });

        modelBuilder.Entity<TblBatteryPerformance>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblBatteryPerformance", "Input");

            entity.Property(e => e.ChargeKah).HasColumnName("ChargeKAH");
            entity.Property(e => e.ChargeKwh).HasColumnName("ChargeKWH");
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DateTime).HasColumnType("datetime");
            entity.Property(e => e.DischargeKah).HasColumnName("DischargeKAH");
            entity.Property(e => e.DischargeKwh).HasColumnName("DischargeKWH");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.SiteId).HasColumnName("SiteID");

            entity.HasOne(d => d.Company).WithMany(p => p.TblBatteryPerformances)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblBatteryPerformance_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblBatteryPerformances)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblBatteryPerformance_tblSite");
        });

        modelBuilder.Entity<TblCamera>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblCamera", "SiteLog");

            entity.Property(e => e.CamName).HasMaxLength(50);
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DateTime).HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblCameras)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblCamera_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblCameras)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblCamera_tblSite");
        });

        modelBuilder.Entity<TblCompany>(entity =>
        {
            entity.HasKey(e => e.Sino);

            entity.ToTable("tblCompany", "Master");

            entity.Property(e => e.Sino).HasColumnName("SINo");
            entity.Property(e => e.Address).HasMaxLength(200);
            entity.Property(e => e.CompanyName).HasMaxLength(150);
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(50);
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
        });

        modelBuilder.Entity<TblCoolingType>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblCoolingType", "Master");

            entity.HasIndex(e => e.CoolingType, "UQ__tblCooli__593FA2FE0407E5E5").IsUnique();

            entity.Property(e => e.CoolingType).HasMaxLength(100);
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description).HasMaxLength(500);
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblCoolingTypes)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblCoolingType_CompanyId");
        });

        modelBuilder.Entity<TblCountry>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblCountry", "Master");

            entity.HasIndex(e => e.CountryName, "UQ__tblCount__E056F201C8BEF889").IsUnique();

            entity.Property(e => e.CountryName).HasMaxLength(100);
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description).HasMaxLength(500);
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblCountries)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblCountry_CompanyId");
        });

        modelBuilder.Entity<TblDetail>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblDetails", "Asset");

            entity.Property(e => e.AlertDatetime).HasColumnType("datetime");
            entity.Property(e => e.AlertDescription).HasMaxLength(250);
            entity.Property(e => e.AlertSevervity).HasMaxLength(100);
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblDetails)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblDetails_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblDetails)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblDetails_tblSite");
        });

        modelBuilder.Entity<TblDg>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblDG", "Energy");

            entity.Property(e => e.Date).HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblDgs)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblDG_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblDgs)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblDG_tblSite");
        });

        modelBuilder.Entity<TblDgdetail>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblDGDetails", "Asset");

            entity.Property(e => e.CapacityKva).HasColumnName("Capacity_KVA");
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Dgid).HasColumnName("DGID");
            entity.Property(e => e.Dgtype)
                .HasMaxLength(100)
                .HasColumnName("DGType");
            entity.Property(e => e.FuelCapacity).HasColumnName("Fuel_Capacity");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.LastServicedOn).HasColumnType("datetime");
            entity.Property(e => e.Make).HasMaxLength(100);
            entity.Property(e => e.Model).HasMaxLength(100);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.NextServiceOn).HasColumnType("datetime");
            entity.Property(e => e.Remarks).HasMaxLength(500);
            entity.Property(e => e.SerialNo).HasMaxLength(250);
            entity.Property(e => e.WarrantyEndDate).HasColumnType("datetime");
            entity.Property(e => e.WarrantyStartDate).HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblDgdetails)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblDGDetails_CompanyId");

            entity.HasOne(d => d.Dg).WithMany(p => p.TblDgdetails)
                .HasForeignKey(d => d.Dgid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblDGDetails_tblDGPrimary");

            entity.HasOne(d => d.ManufacturerNavigation).WithMany(p => p.TblDgdetails)
                .HasForeignKey(d => d.Manufacturer)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblDGDetails_tblManufacturer");
        });

        modelBuilder.Entity<TblDgprimary>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblDGPrimary", "Asset");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.NoOfDg).HasColumnName("NoOfDG");
            entity.Property(e => e.RefSiteId).HasColumnName("refSiteId");

            entity.HasOne(d => d.Company).WithMany(p => p.TblDgprimaries)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblDGPrimary_CompanyId");

            entity.HasOne(d => d.RefSite).WithMany(p => p.TblDgprimaries)
                .HasForeignKey(d => d.RefSiteId)
                .HasConstraintName("FK_tblDGPrimary_tblSite");
        });

        modelBuilder.Entity<TblEnergyLogSolar>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblEnergyLog_Solar", "SiteLog");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.SolarKwh).HasColumnName("Solar_KWH");

            entity.HasOne(d => d.Company).WithMany(p => p.TblEnergyLogSolars)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblEnergyLog_Solar_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblEnergyLogSolars)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblEnergyLog_Solar_tblSite");
        });

        modelBuilder.Entity<TblEnergyLogsAc>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblEnergyLogs_AC", "SiteLog");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DgKwh).HasColumnName("DG_KWH");
            entity.Property(e => e.EbKwh).HasColumnName("EB_KWH");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblEnergyLogsAcs)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblEnergyLogs_AC_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblEnergyLogsAcs)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblEnergyLogs_AC_tblSite");
        });

        modelBuilder.Entity<TblEnergyLogsBattery>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblEnergyLogs_Battery", "SiteLog");

            entity.Property(e => e.Bat1Kwh).HasColumnName("Bat1_KWH");
            entity.Property(e => e.Bat2Kwh).HasColumnName("Bat2_KWH");
            entity.Property(e => e.Bat3Kwh).HasColumnName("Bat3_KWH");
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblEnergyLogsBatteries)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblEnergyLogs_Battery_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblEnergyLogsBatteries)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblEnergyLogs_Battery_tblSite");
        });

        modelBuilder.Entity<TblEnergyLogsLoad>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblEnergyLogs_Load", "SiteLog");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.Load1Kwh).HasColumnName("Load1_KWH");
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblEnergyLogsLoads)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblEnergyLogs_Load_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblEnergyLogsLoads)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblEnergyLogs_Load_tblSite");
        });

        modelBuilder.Entity<TblGrid>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblGrid", "Energy");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DateTime).HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblGrids)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblGrid_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblGrids)
                .HasForeignKey(d => d.SiteId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblGrid_tblSite");
        });

        modelBuilder.Entity<TblImage>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblImages", "Site");

            entity.Property(e => e.SiteId).HasColumnName("SiteID");

            entity.HasOne(d => d.Site).WithMany(p => p.TblImages)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblImages_tblSite");
        });

        modelBuilder.Entity<TblLoad>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblLoad", "Input");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Date).HasColumnType("datetime");
            entity.Property(e => e.DcoutPower).HasColumnName("DCOutPower");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblLoads)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblLoad_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblLoads)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblLoad_tblSite");
        });

        modelBuilder.Entity<TblManufacturer>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblManufacturer", "Master");

            entity.HasIndex(e => e.Manufacturer, "UQ__tblManuf__D194335A7E4DCBCA").IsUnique();

            entity.HasIndex(e => e.Manufacturer, "UQ__tblManuf__D194335AA2E90F55").IsUnique();

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description).HasMaxLength(500);
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.Manufacturer).HasMaxLength(200);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblManufacturers)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblManufacturer_CompanyId");
        });

        modelBuilder.Entity<TblMenuMaster>(entity =>
        {
            entity.HasKey(e => e.MenuId);

            entity.ToTable("tblMenuMaster", "Master");

            entity.Property(e => e.MenuId).ValueGeneratedNever();
            entity.Property(e => e.Controller).HasMaxLength(100);
            entity.Property(e => e.Createdate).HasColumnType("datetime");
            entity.Property(e => e.Icon).HasMaxLength(250);
            entity.Property(e => e.Menuname).HasMaxLength(100);
            entity.Property(e => e.Method).HasMaxLength(100);
            entity.Property(e => e.Module).HasMaxLength(100);
            entity.Property(e => e.Url).HasMaxLength(500);
        });

        modelBuilder.Entity<TblMenuPermission>(entity =>
        {
            entity.HasKey(e => e.Permissionid);

            entity.ToTable("tblMenuPermission", "Master");

            entity.HasOne(d => d.Menu).WithMany(p => p.TblMenuPermissions)
                .HasForeignKey(d => d.MenuId)
                .HasConstraintName("FK_tblMenuPermission_tblRole");
        });

        modelBuilder.Entity<TblOther>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblOthers", "Asset");

            entity.Property(e => e.AssetName).HasMaxLength(100);
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description).HasMaxLength(500);
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.SerialNo).HasMaxLength(250);
            entity.Property(e => e.Type).HasMaxLength(100);

            entity.HasOne(d => d.Company).WithMany(p => p.TblOthers)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblOthers_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblOthers)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblOthers_tblSite");
        });

        modelBuilder.Entity<TblPerformance>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblPerformance", "SiteLog");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblPerformances)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblPerformance_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblPerformances)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblPerformance_tblSite");
        });

        modelBuilder.Entity<TblRecitiferGstatus>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblRecitiferGStatus", "Input");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DateTime)
                .HasMaxLength(10)
                .IsFixedLength();
            entity.Property(e => e.Ecomode).HasColumnName("ECOMode");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblRecitiferGstatuses)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblRecitiferGStatus_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblRecitiferGstatuses)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblRecitiferGStatus_tblSite");
        });

        modelBuilder.Entity<TblRecitiferIndividualStatus>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblRecitiferIndividualStatus", "Input");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DateTime).HasColumnType("datetime");
            entity.Property(e => e.Dcstate)
                .HasMaxLength(50)
                .HasColumnName("DCState");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.SerialNo).HasMaxLength(50);
            entity.Property(e => e.Status)
                .HasMaxLength(10)
                .IsFixedLength();

            entity.HasOne(d => d.Company).WithMany(p => p.TblRecitiferIndividualStatuses)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblRecitiferIndividualStatus_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblRecitiferIndividualStatuses)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblRecitiferIndividualStatus_tblSite");
        });

        modelBuilder.Entity<TblRecitifier>(entity =>
        {
            entity.HasKey(e => e.SlNo).HasName("PK_tblRecitifier_1");

            entity.ToTable("tblRecitifier", "Asset");

            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.LastServicedOn).HasColumnType("datetime");
            entity.Property(e => e.Make).HasMaxLength(100);
            entity.Property(e => e.Model).HasMaxLength(100);
            entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            entity.Property(e => e.NextServiceOn).HasColumnType("datetime");
            entity.Property(e => e.RefSiteId).HasColumnName("refSiteId");
            entity.Property(e => e.Remarks).HasMaxLength(500);
            entity.Property(e => e.SerialNo).HasMaxLength(250);
            entity.Property(e => e.Type).HasMaxLength(100);
            entity.Property(e => e.WarrantyEndDate).HasColumnType("datetime");
            entity.Property(e => e.WarrantyStartDate).HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblRecitifiers)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblRecitifier_CompanyId");

            entity.HasOne(d => d.ManufacturerNavigation).WithMany(p => p.TblRecitifiers)
                .HasForeignKey(d => d.Manufacturer)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblRecitifier_tblManufacturer");

            entity.HasOne(d => d.RefSite).WithMany(p => p.TblRecitifiers)
                .HasForeignKey(d => d.RefSiteId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblRecitifier_tblSite");
        });

        modelBuilder.Entity<TblRecitifier1>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblRecitifier", "Energy");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DateTime).HasColumnType("datetime");
            entity.Property(e => e.Dcstate)
                .HasMaxLength(50)
                .HasColumnName("DCState");
            entity.Property(e => e.Ipcurrent).HasColumnName("IPCurrent");
            entity.Property(e => e.Ipfrequency).HasColumnName("IPFrequency");
            entity.Property(e => e.Ipvoltage).HasColumnName("IPVoltage");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Opcurrent).HasColumnName("OPCurrent");
            entity.Property(e => e.Opvoltage).HasColumnName("OPVoltage");
            entity.Property(e => e.SerialNo).HasMaxLength(250);
            entity.Property(e => e.Status).HasMaxLength(150);

            entity.HasOne(d => d.Company).WithMany(p => p.TblRecitifier1s)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblRecitifier_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblRecitifier1s)
                .HasForeignKey(d => d.SiteId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblRecitifier_tblSite");
        });

        modelBuilder.Entity<TblRegion>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblRegion", "Master");

            entity.HasIndex(e => e.RegionName, "UQ__tblRegio__A6A5AD7A85042003").IsUnique();

            entity.Property(e => e.SlNo).ValueGeneratedNever();
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description).HasMaxLength(500);
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.RegionName).HasMaxLength(100);

            entity.HasOne(d => d.Company).WithMany(p => p.TblRegions)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblRegion_CompanyId");
        });
        

        modelBuilder.Entity<TblRmsasset>(entity =>
        {
            entity.HasKey(e => e.SlNo).HasName("PK_RMSAsset");

            entity.ToTable("tblRMSAsset", "Site");

            entity.Property(e => e.SlNo);
            entity.Property(e => e.AirconController1Remarks).HasMaxLength(50);
            entity.Property(e => e.AirconController2Remarks).HasMaxLength(50);
            entity.Property(e => e.CameraIpaddress)
                .HasMaxLength(50)
                .HasColumnName("CameraIPAddress");
            entity.Property(e => e.CameraIpaddress1)
                .HasMaxLength(50)
                .HasColumnName("CameraIPAddress1");
            entity.Property(e => e.CameraIpaddress2)
                .HasMaxLength(50)
                .HasColumnName("CameraIPAddress2");
            entity.Property(e => e.CameraIpaddress3)
                .HasMaxLength(50)
                .HasColumnName("CameraIPAddress3");
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.DgcontrolllerRemarks)
                .HasMaxLength(50)
                .HasColumnName("DGControlllerRemarks");
            entity.Property(e => e.DgcontrolllerVisible).HasColumnName("DGControlllerVisible");
            entity.Property(e => e.EnclosureRemarks).HasMaxLength(50);
            entity.Property(e => e.IsDgcontrolllerAvailable).HasColumnName("IsDGControlllerAvailable");
            entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            entity.Property(e => e.SiteId).HasColumnName("SiteID");

            entity.HasOne(d => d.Site).WithMany(p => p.TblRmsassets)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_RMSAsset_tblSite");
        });

        modelBuilder.Entity<TblRole>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblRole", "Master");

            entity.Property(e => e.RoleName).HasMaxLength(100);
        });

        modelBuilder.Entity<TblRunHrsLogsAc>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblRunHrsLogs_AC", "SiteLog");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.DgRunHrs).HasColumnName("DG_RunHrs");
            entity.Property(e => e.EbRunHrs).HasColumnName("EB_RunHrs");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblRunHrsLogsAcs)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblRunHrsLogs_AC_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblRunHrsLogsAcs)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblRunHrsLogs_AC_tblSite");
        });

        modelBuilder.Entity<TblRunHrsLogsBattery>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblRunHrsLogs_Battery", "SiteLog");

            entity.Property(e => e.BatteryRunHrs).HasColumnName("Battery_RunHrs");
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblRunHrsLogsBatteries)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblRunHrsLogs_Battery_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblRunHrsLogsBatteries)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblRunHrsLogs_Battery_tblSite");
        });

        modelBuilder.Entity<TblRunHrsLogsSolar>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblRunHrsLogs_Solar", "SiteLog");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.SolarRunHrs).HasColumnName("Solar_RunHrs");

            entity.HasOne(d => d.Company).WithMany(p => p.TblRunHrsLogsSolars)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblRunHrsLogs_Solar_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblRunHrsLogsSolars)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblRunHrsLogs_Solar_tblSite");
        });

        modelBuilder.Entity<TblServiceHistory>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblServiceHistory", "Asset");

            entity.Property(e => e.AssetTypeIdf).HasColumnName("AssetTypeIDF");
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.Make).HasMaxLength(100);
            entity.Property(e => e.Model).HasMaxLength(100);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.SerialNo).HasMaxLength(100);
            entity.Property(e => e.ServicedOn).HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblServiceHistories)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblServiceHistory_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblServiceHistories)
                .HasForeignKey(d => d.SiteId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblServiceHistory_tblSite");
        });

        modelBuilder.Entity<TblSimOperator>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblSimOperator", "Master");

            entity.HasIndex(e => e.Operator, "UQ__tblSimOp__DF01DCA48FC79B13").IsUnique();

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description).HasMaxLength(500);
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Operator).HasMaxLength(100);

            entity.HasOne(d => d.Company).WithMany(p => p.TblSimOperators)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblSimOperator_CompanyId");
        });

        modelBuilder.Entity<TblSite>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblSite", "Master");

            entity.Property(e => e.Address).HasMaxLength(500);
            entity.Property(e => e.AssetId).HasColumnName("AssetID");
            entity.Property(e => e.ContactNo).HasMaxLength(50);
            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.HardwareVersion).HasMaxLength(50);
            entity.Property(e => e.IpAddress).HasMaxLength(50);
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.LandMark).HasMaxLength(250);
            entity.Property(e => e.Lat).HasMaxLength(250);
            entity.Property(e => e.Long).HasMaxLength(250);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Remarks).HasMaxLength(500);
            entity.Property(e => e.SimCardNo1).HasMaxLength(50);
            entity.Property(e => e.SimCardNo2).HasMaxLength(50);
            entity.Property(e => e.SiteId).HasMaxLength(250);
            entity.Property(e => e.SiteInChargeName).HasColumnName("Site_InChargeName");
            entity.Property(e => e.SiteName).HasMaxLength(200);
            entity.Property(e => e.SiteShortName).HasMaxLength(10);
            entity.Property(e => e.Softwareversion).HasMaxLength(50);

            entity.HasOne(d => d.Company).WithMany(p => p.TblSites)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblSite_CompanyId");

            entity.HasOne(d => d.CoolingTypeNavigation).WithMany(p => p.TblSites)
                .HasForeignKey(d => d.CoolingType)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblSite_tblCoolingType");

            entity.HasOne(d => d.CountryNavigation).WithMany(p => p.TblSites)
                .HasForeignKey(d => d.Country)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblSite_tblCountry");

            entity.HasOne(d => d.Region).WithMany(p => p.TblSites)
                .HasForeignKey(d => d.RegionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblSite_tblRegion1");

            entity.HasOne(d => d.SimOperator1Navigation).WithMany(p => p.TblSites)
                .HasForeignKey(d => d.SimOperator1)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblSite_tblSimOperator");

            entity.HasOne(d => d.SiteTypeNavigation).WithMany(p => p.TblSites)
                .HasForeignKey(d => d.SiteType)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblSite_tblSiteType");

            entity.HasOne(d => d.StateNavigation).WithMany(p => p.TblSites)
                .HasForeignKey(d => d.State)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblSite_tblState");
        });

        modelBuilder.Entity<TblSiteType>(entity =>
        {
            entity.HasKey(e => e.SlNo).HasName("PK_Master.tblSiteType");

            entity.ToTable("tblSiteType", "Master");

            entity.HasIndex(e => e.SiteType, "UQ__tblSiteT__EE0DC96D367AA98D").IsUnique();

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description).HasMaxLength(500);
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.SiteType).HasMaxLength(100);

            entity.HasOne(d => d.Company).WithMany(p => p.TblSiteTypes)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblSiteType_CompanyId");
        });

        modelBuilder.Entity<TblSolar>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblSolar", "Asset");

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.LastServicedOn).HasColumnType("datetime");
            entity.Property(e => e.Make).HasMaxLength(100);
            entity.Property(e => e.Model).HasMaxLength(100);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.NextServiceOn).HasColumnType("datetime");
            entity.Property(e => e.Remarks).HasMaxLength(500);
            entity.Property(e => e.SerialNo).HasMaxLength(250);
            entity.Property(e => e.Type).HasMaxLength(100);
            entity.Property(e => e.WarrantyEndDate).HasColumnType("datetime");
            entity.Property(e => e.WarrantyStartDate).HasColumnType("datetime");

            entity.HasOne(d => d.Company).WithMany(p => p.TblSolars)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblSolar_CompanyId");

            entity.HasOne(d => d.ManufacturerNavigation).WithMany(p => p.TblSolars)
                .HasForeignKey(d => d.Manufacturer)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblSolar_tblManufacturer");

            entity.HasOne(d => d.Site).WithMany(p => p.TblSolars)
                .HasForeignKey(d => d.SiteId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblSolar_tblSite");
        });

        modelBuilder.Entity<TblSolar1>(entity =>
        {
            entity.HasKey(e => e.SlNo).HasName("PK_tblSolar_1");

            entity.ToTable("tblSolar", "Energy");

            entity.Property(e => e.Date).HasColumnType("datetime");
            entity.Property(e => e.Dcstate)
                .HasMaxLength(50)
                .HasColumnName("DCState");
            entity.Property(e => e.Ipcurrent).HasColumnName("IPCurrent");
            entity.Property(e => e.Ippower).HasColumnName("IPPower");
            entity.Property(e => e.Ipvoltage).HasColumnName("IPVoltage");
            entity.Property(e => e.Opcurrent).HasColumnName("OPCurrent");
            entity.Property(e => e.Opvoltage).HasColumnName("OPVoltage");
            entity.Property(e => e.SerialNo).HasMaxLength(250);
            entity.Property(e => e.SolarKwh).HasColumnName("SolarKWH");
            entity.Property(e => e.Status).HasMaxLength(150);

            entity.HasOne(d => d.Company).WithMany(p => p.TblSolar1s)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblSolar_CompanyId");

            entity.HasOne(d => d.Site).WithMany(p => p.TblSolar1s)
                .HasForeignKey(d => d.SiteId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_tblSolar_tblSite");
        });

        modelBuilder.Entity<TblState>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblState", "Master");

            entity.HasIndex(e => e.StateName, "UQ__tblState__55476315D3BAD502").IsUnique();

            entity.Property(e => e.CreatedBy).HasDefaultValue(0L);
            entity.Property(e => e.CreatedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.Description).HasMaxLength(500);
            entity.Property(e => e.IsDeleted).HasDefaultValue(false);
            entity.Property(e => e.ModifiedBy).HasDefaultValue(0L);
            entity.Property(e => e.ModifiedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime");
            entity.Property(e => e.StateName).HasMaxLength(100);

            entity.HasOne(d => d.Company).WithMany(p => p.TblStates)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblState_CompanyId");
        });

        modelBuilder.Entity<TblTenant>(entity =>
        {
            entity.HasKey(e => e.SlNo).HasName("PK_Tenant");

            entity.ToTable("tblTenant", "Site");

            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            entity.Property(e => e.SiteId).HasColumnName("SiteID");
            entity.Property(e => e.TenantName).HasMaxLength(50);

            entity.HasOne(d => d.Site).WithMany(p => p.TblTenants)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_Tenant_tblSite");
        });

        modelBuilder.Entity<TblTenantSiteAsset>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblTenantSiteAsset", "Site");

            entity.Property(e => e.BatteryRemarks).HasMaxLength(50);
            entity.Property(e => e.CreatedDate).HasColumnType("datetime");
            entity.Property(e => e.GeneratorRemarks).HasMaxLength(50);
            entity.Property(e => e.GridRemarks).HasMaxLength(50);
            entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            entity.Property(e => e.PortableBatteryRemarks).HasMaxLength(50);
            entity.Property(e => e.RectifierRemarks).HasMaxLength(50);
            entity.Property(e => e.SiteId).HasColumnName("SiteID");
            entity.Property(e => e.SolarRermarks).HasMaxLength(50);
            entity.Property(e => e.TenantId).HasColumnName("TenantID");

            entity.HasOne(d => d.Site).WithMany(p => p.TblTenantSiteAssets)
                .HasForeignKey(d => d.SiteId)
                .HasConstraintName("FK_tblTenantSiteAsset_tblSite");
        });

        modelBuilder.Entity<TblUser>(entity =>
        {
            entity.HasKey(e => e.SlNo);

            entity.ToTable("tblUser", "Master");

            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.EmpName).HasMaxLength(150);
            entity.Property(e => e.UserName).HasMaxLength(150);

            entity.HasOne(d => d.Company).WithMany(p => p.TblUsers)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_tblUser_CompanyId");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
