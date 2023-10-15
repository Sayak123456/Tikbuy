import mongoose from "mongoose";
import { updateIfCurrentPlugin } from "mongoose-update-if-current";
import { OrderStatus } from "@tikbuy/common";

// An interface that describes the properties that are required to create a new Order
interface OrderAttributes {
    id: string;
    version: number;
    userId: string;
    price: number;
    status: OrderStatus;
}

// An interface that describes the properties that a Order Document has 
interface OrderDoc extends mongoose.Document {
    userId: string;
    price: number;
    status: OrderStatus;
    version: number;
}

// An interface that describes the properties that a Order Model has
interface OrderModel extends mongoose.Model<OrderDoc> {
    build(attrs: OrderAttributes): OrderDoc;
}

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: Object.values(OrderStatus),
    },
    price: {
        type: Number,
        required: true
    },
}, {
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
        }
    }
});

orderSchema.set('versionKey', 'version');
orderSchema.plugin(updateIfCurrentPlugin);

orderSchema.statics.build = (attrs: OrderAttributes) => {
    return new Order({
        _id: attrs.id,
        version: attrs.version,
        price: attrs.price,
        userId: attrs.userId,
        status: attrs.status
    });
}

const Order = mongoose.model<OrderDoc, OrderModel>('Order', orderSchema);

export { Order };