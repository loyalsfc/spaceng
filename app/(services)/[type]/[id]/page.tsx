"use client";

import React from "react";

import {useGetProperty} from "@/api/property/property";
import Loader from "@/components/loader/loader";
import NotFound from "@/components/not-found/not-found";
import {Type} from "@/api/property/property-list";

import DetailsPage from "../../_components/property-detail-page/details-page";

function Page({params}: {params: {type: Type; id: string}}) {
  const {data, isLoading} = useGetProperty(params.id);

  if (isLoading) {
    return (
      <div className="h-screen grid place-content-center">
        <Loader />
      </div>
    );
  }

  if (!data?.data) {
    return <NotFound />;
  }

  const {
    property_title,
    price,
    property_description,
    property_address,
    gallery,
    features,
    reviews,
    caution_fee,
    video,
    property_terms,
    user,
  } = data.data;

  return (
    <DetailsPage
      amenities={features}
      cautionFee={caution_fee}
      coordinate={property_address?.coordinates}
      cost={price}
      description={property_description}
      descriptionTitle={property_title}
      images={gallery}
      label={params.type === "shortlet" ? "Guest" : "Team"}
      location={`${property_address.address}, ${property_address.neighborhood || ""}, ${property_address.location || ""}`}
      ownerId={user}
      property_terms={property_terms}
      reviews={reviews}
      title={property_title}
      video={video}
    />
  );
}

export default Page;
