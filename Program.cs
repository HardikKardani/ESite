using ESite.Data.HelperClass;
using ESite.Data.UOW;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ESite.Data.ViewModel;
using System.Configuration;
using ESite;

using ESite.Data.HelperClass;
using Microsoft.AspNetCore.Http.Features;
using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using System.Net;
using Data.EntityModel.Partialclass;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();
builder.Services.AddAuthentication("ESiteAuth").AddCookie("ESiteAuth", options =>
{
    options.Cookie.Name = "ESiteApp";
    options.ExpireTimeSpan = TimeSpan.FromDays(30);
    options.SlidingExpiration = true;
    options.Cookie.IsEssential = true;
    options.LoginPath = "/Login/LoginIndex";
    options.LogoutPath = "/Login/LoginIndex";
    options.AccessDeniedPath = "/Login/Unauthorized";
    //options.Cookie.HttpOnly = true;
    options.Cookie.SecurePolicy = CookieSecurePolicy.None;
});

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddScoped<IExcelService, ExcelService>();
builder.Services.Configure<FormOptions>(x => x.ValueCountLimit = int.MaxValue);
builder.Services.AddMvc(x => x.MaxModelBindingCollectionSize = int.MaxValue);
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
//builder.Services.AddSingleton<JsonFileProcessor>();
builder.Services.AddDbContext<ESiteContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
//builder.Services.AddEndpointsApiExplorer();
builder.Services.AddHttpContextAccessor();
builder.Services.AddControllers();

var app = builder.Build();
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

//app.Use(async (context, next) =>
//{
//    if (!context.User.Identity.IsAuthenticated)
//    {
//        context.Response.Redirect("/Login/LoginIndex");
//        return;
//    }

//    await next();
//});
app.Run();
