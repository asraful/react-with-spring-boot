"use client";

import { useState, useEffect } from 'react'
import useSWR from 'swr';

export default function Home() {
 
    const fetcher = (...args) => fetch(...args).then((res) => res.text());
     
      const { data, error } = useSWR('http://localhost:8080/api/hello', fetcher);
     
      if (error) return <div>Failed to load</div>;
      if (!data) return <div>Loading...</div>;
     
      return (
        <div>
          <h1>{data}</h1>
        </div>
      );
}
