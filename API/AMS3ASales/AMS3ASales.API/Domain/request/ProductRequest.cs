namespace AMS3ASales.API.Domain
{
    public class ProductResquest
    {
       
        public string Description { get; set; }
       
        public string ImageURL { get; set; }
       
        public double Price { get; set; }
        public double Stock {  get; set; }
        public Guid CategoryId { get; set; }

    }
}