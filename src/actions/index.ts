"use server";

import { db } from "@/db";

async function getProperties() {
  try {
    const properties = await db.property.findMany({
      where: {
        isSold: false,
      },
    });
    return properties;
  } catch (error) {
    console.error(error);
  }
}

export { getProperties };
