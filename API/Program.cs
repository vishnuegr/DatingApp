using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using API.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
 app.UseCors(builder => builder.WithOrigins("https://localhost:4200", "http://localhost:4200")
                                .AllowAnyHeader()
                                .AllowAnyMethod());

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();
