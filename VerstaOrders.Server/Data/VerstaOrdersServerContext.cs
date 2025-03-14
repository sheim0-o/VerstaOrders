using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using VerstaOrders.Server;

namespace VerstaOrders.Server.Data
{
    public class VerstaOrdersServerContext : DbContext
    {
        public VerstaOrdersServerContext (DbContextOptions<VerstaOrdersServerContext> options)
            : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

        public DbSet<VerstaOrders.Server.Order> Order { get; set; } = default!;
    }
}
