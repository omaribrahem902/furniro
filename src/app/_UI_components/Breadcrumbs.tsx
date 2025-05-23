import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbsProps {
    page1: string;
    page2?: string;
    page3?:string;
    productId?: string;
}

export default function Breadcrumbs({ page1, page2, page3 , productId }: BreadcrumbsProps) {
  return (
    <div className="w-full bg-(--secondary) flex justify-start px-[50px] py-[20px] lg:px-[100px] lg:py-[30px]">

    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">{page1}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/shop">{page2}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {page3 && 
          <>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/products/${productId}`}>{page3}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          </>
          }
      </BreadcrumbList>
    </Breadcrumb>
    </div>
  );
}
