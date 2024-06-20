using AMS3ASales.API.Context;
using AMS3ASales.API.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AMS3ASales.API.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly AplicationDataContext _context;
        public CategoriesController(AplicationDataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Category>> Get()
        {
            return _context.Category.Where(c => c.IsActive == true).ToList();
            
        }
        [HttpGet]
        [Route("{id:Guid}")]
        public ActionResult<Category> GetByCategoryId(Guid id)
        {
            var category = _context.Category.FirstOrDefault(c => c.Id == id);
            if (category == null) return NotFound();

            return Ok(category);

        }

        [HttpPost]
        public ActionResult Post(CategoryResquest categoryRequest)
        {
            var category = new Category()
            {
                Description = categoryRequest.Description,
                IsActive = true,
                ImageURL = categoryRequest.Description,
            };
            _context.Category.Add(category);
            _context.SaveChanges();

            return Ok();


        }
        [HttpPut("{id:Guid}")]
        public IActionResult Put(Guid id, CategoryResquest categoryRequest)
        {
            var existingCategory = _context.Category.FirstOrDefault(c => c.Id == id);
            if (existingCategory == null)
            {
                return NotFound();
            }
            existingCategory.Description = categoryRequest.Description;
            _context.SaveChanges();
            return Ok();
        }
        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> DeleteCategory(Guid id)
        {
            var category1 = await _context.Category.FindAsync(id);
            if (category1 == null)
            {
                return NotFound();
            }

            category1.IsActive = false;
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
