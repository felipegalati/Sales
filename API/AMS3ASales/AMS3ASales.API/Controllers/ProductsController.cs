using AMS3ASales.API.Context;
using AMS3ASales.API.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AMS3ASales.API.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly AplicationDataContext _context;
        public ProductsController(AplicationDataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            return _context.Product.ToList();
        }
        [HttpGet]
        [Route("{id:Guid}")]
        public ActionResult<Product> GetByProductId(Guid id)
        {
            var product = _context.Product.FirstOrDefault(p => p.Id == id);
            if (product == null) return NotFound();

            return Ok(product);

        }
        [HttpPost]
        public ActionResult Post(ProductResquest productResquest) 
        {
            var product = new Product()
            {
                Description = productResquest.Description,
                Stock = productResquest.Stock,
                Price = productResquest.Price,
                IsActive = true,
                ImageURL = productResquest.ImageURL,
                CategoryId = productResquest.CategoryId
            };
                _context.Product.Add(product);
                _context.SaveChanges();

                return Ok();
        }
        [HttpPut("{id:Guid}")]
        public IActionResult Put(Guid id, ProductResquest productResquest)
        {
            var product = _context.Product.FirstOrDefault(p => p.Id == id);
            if (product == null)
            {
                return NotFound();
            }
            product.Description = productResquest.Description;
            product.Stock = productResquest.Stock;
            product.Price = productResquest.Price;
            product.ImageURL = productResquest.ImageURL;

            _context.SaveChanges();
            return Ok();
        }
        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> DeleteProduct(Guid id)
        {
            var product = await _context.Product.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            product.IsActive = false;
            await _context.SaveChangesAsync();

            return Ok();
        }

    }
}
