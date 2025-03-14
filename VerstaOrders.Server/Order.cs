using System.ComponentModel.DataAnnotations;

namespace VerstaOrders.Server
{
    public class Order
    {
        public int Id { get; set; }
        public string SenderCity { get; set; }
        public string SenderAddress { get; set; }
        public string RecipientCity { get; set; }
        public string RecipientAddress { get; set; }
        public double CargoWeight { get; set; }

        [DataType(DataType.Date)]
        public DateTime PickupDate { get; set; }

        public string OrderNumber { get; set; } = Guid.NewGuid().ToString();
    }
}
