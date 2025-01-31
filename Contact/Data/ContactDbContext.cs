
using Contact.Models;
using Contact.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace Contact.Data
{
    public class ContactDbContext : DbContext
    {
        public ContactDbContext(DbContextOptions<ContactDbContext> options) : base(options)
        {
        }

        public DbSet<Contact.Models.Domain.Contact> Contacts { get; set; }
    }
}
