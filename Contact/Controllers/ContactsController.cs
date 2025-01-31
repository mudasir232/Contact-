using Contact.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Contact.Models;

using Contact.Models.Domain;

namespace Contact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly ContactDbContext _dbContext;

        public ContactsController(ContactDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllContacts()
        {
            var contacts = _dbContext.Contacts.ToList();
            return Ok(contacts);
        }

        [HttpPost]
        public IActionResult AddContact(AddContactRequestDTO request)
        {
            var domainModelContact = new Contact.Models.Domain.Contact
            {
                Id = Guid.NewGuid(),
                Name = request.Name,
                Email = request.Email,
                Phone = request.Phone,
                Favorite = request.Favorite
            };

            _dbContext.Contacts.Add(domainModelContact);
            _dbContext.SaveChanges();
            return Ok(domainModelContact);
      
        
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public IActionResult DeleteContact(Guid id)
        {
            var contact = _dbContext.Contacts.Find(id);
            if (contact == null)
            {
                return NotFound();
            }
            _dbContext.Contacts.Remove(contact);
            _dbContext.SaveChanges();
            return NoContent();
        }










    }




}
