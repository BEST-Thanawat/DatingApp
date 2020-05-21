using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASPNET_Core_and_Angular.Models
{
    public class Angular_Core_DBContext : DbContext
    {
        public Angular_Core_DBContext(DbContextOptions<Angular_Core_DBContext> options) : base(options)
        {

        }
        public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
