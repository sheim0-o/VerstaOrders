using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using VerstaOrders.Server.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<VerstaOrdersServerContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("VerstaOrdersServerContext") ?? throw new InvalidOperationException("Connection string 'VerstaOrdersServerContext' not found.")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        policy =>
        {
            policy.WithOrigins("https://localhost:60253")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

app.UseDefaultFiles();
app.MapStaticAssets();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors("AllowSpecificOrigin");


app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
